# PDF downloader for [Pearson's ActiveLearn](https://www.pearsonactivelearn.com/app/Home) textbooks

## Requirements

- Python 3.6+
- `ocrmypdf`
- `img2pdf`
- `pdftk`
- `wget`
- Some form of bash
- [My Python script](./downloader.py)

## Instructions

(Credit to [u/flanter21](https://www.reddit.com/user/flanter21/) for [his guide on getting the required URL](https://www.reddit.com/r/6thForm/comments/95v3ij/activelearn_book_to_pdf/e3voful?utm_source=share&utm_medium=web2x))

1. Log into ActiveLearn.
2. Open the book you want to convert.
3. Navigate to the last page of the book.
4. Right-click on the last page of the book.
5. Click inspect.
    > `<div style="position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,0);"></div>`

    should be what is highlighted.
6. Press the up arrow once on the keyboard to select the iframe.
7. Look for the URL in the iframe element.
8. Double-click the URL to highlight it and press Ctrl+C to copy it.
9. Paste the URL in the address bar of a new tab.
10. Right-click the image that appears and click open in new tab.
11. Copy the URL of that page.

    It should end with a hyphen and then 3 numbers and then `.jpg` (e.g. `-408.jpg`)
12. Run `python3 downloader.py` and fill in the prompts it gives you (for advanced users, it uses `click` so you can look at the help for CLI options)
13. Wait for it to complete, you should now have a `book.pdf` in the current directory.

## Some warnings

- I cannot guarantee you won't be blocked from ActiveLearn for running this tool; however I was not
- Ensure you do not run this in a directory containing a `book` folder as all its contents will be deleted (if you use `-o` this changes to whatever you supplied)
- I cannot guarantee that the OCR will be perfect as it isn't my library
