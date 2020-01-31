import click
import os
from math import log10, ceil
import colorama as colour
import shutil

statuses = {
    "info": "[     INFO ]",
    "warn": "[     WARN ]",
    "err": "[    ERROR ]",
    "crit": "[ CRITICAL ]",
}


@click.command()
@click.option("-u", "--url", prompt="Url of any page")
@click.option("-p", "--num-pages", type=int, prompt="Highest page number")
@click.option("-o", "--book-name", default="book")
def download(url: str, num_pages: int, book_name):
    colour.init(autoreset=True)
    url_template = url[:-7] + "{{:0>{}}}.jpg".format(ceil(log10(num_pages)))

    filenames = [url_template.format(i) for i in range(1, num_pages + 1)]
    with open(book_name + ".txt", "w") as file:
        file.write("\n".join(filenames))
    print(colour.Fore.GREEN + f"{statuses['info']} Wrote filenames to {book_name}.txt")

    filenames = [i.split("/")[-1][:-4] for i in filenames]

    # wget -i book.txt -nv --show-progress -nd -P book
    os.system(f'wget -i "{book_name}.txt" -nv --show-progress -nd -P "{book_name}"')
    os.remove(book_name + ".txt")
    print(colour.Fore.GREEN + f"{statuses['info']} Successfully fetched pages")

    # img2pdf file.jpg -o file.pdf
    for filename in filenames:
        os.system(
            f'img2pdf "{os.path.join(book_name, filename)}.jpg"'
            f' -o "{os.path.join(book_name, filename)}.pdf"'
        )
        if os.path.exists(os.path.join(book_name, filename + ".pdf")):
            os.remove(os.path.join(book_name, filename + ".jpg"))
            print(
                colour.Fore.GREEN
                + f"{statuses['info']} Converted {filename}.jpg to PDF"
            )
        else:
            print(
                colour.Fore.RED
                + f"{statuses['crit']} Failed to convert {filename}.jpg to PDF"
            )
            exit(1)
    print(colour.Fore.GREEN + f"{statuses['info']} Successfully converted pages")

    # ocrmypdf file.pdf file_ocr.pdf
    read_pages = 0
    failed_files = []
    for filename in filenames:
        os.system(
            f'ocrmypdf "{os.path.join(book_name, filename)}.pdf"'
            f' "{os.path.join(book_name, filename)}_ocr.pdf"'
        )
        if os.path.exists(os.path.join(book_name, filename + "_ocr.pdf")):
            os.remove(os.path.join(book_name, filename + ".pdf"))
            print(
                colour.Fore.GREEN
                + f"{statuses['info']} Read {filename}.pdf to {filename}_ocr.pdf"
            )
            read_pages += 1
        else:
            print(
                colour.Fore.YELLOW + f"{statuses['warn']} Failed to read {filename}.pdf"
            )
            shutil.move(
                os.path.join(book_name, filename) + ".pdf",
                os.path.join(book_name, filename) + "_ocr.pdf",
            )
            failed_files.append(filename + ".pdf")
    print(
        colour.Fore.GREEN + f"{statuses['info']} Successfully read {read_pages} pages"
    )
    if failed_files:
        print(colour.Fore.RED + f"{statuses['info']} Failed to read:")
        for filename in filenames:
            print(colour.Fore.RED + f"{statuses['info']}   - {filename}")

    # combine
    os.system(f'pdftk "{book_name}"/*.pdf cat output "{book_name}.pdf"')
    if os.path.exists(book_name + ".pdf"):
        print(
            colour.Fore.GREEN
            + f"{statuses['info']} Successfully concatenated pages to {book_name}.pdf"
        )
        shutil.rmtree(book_name)
    else:
        print(colour.Fore.RED + f"{statuses['err']} Failed to concatenate pages")
        exit(1)


if __name__ == "__main__":
    download()  # pylint: disable=no-value-for-parameter
