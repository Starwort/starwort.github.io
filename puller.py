if __name__ == "__main__":
    import requests
    from bs4 import BeautifulSoup as BS
    import re

    pattern = re.compile(
        r"(https://vignette\.wikia\.nocookie\.net/animalcrossing/images/./../NH-Icon-.+\.png/revision/latest/)scale-to-width-down/64\?cb=.{14}"
    )

    bugs_url = "https://animalcrossing.fandom.com/wiki/Bugs_(New_Horizons)"
    fish_url = "https://animalcrossing.fandom.com/wiki/Fish_(New_Horizons)"

    bug_soup = BS(requests.get(bugs_url).text, features="html5lib")
    bug_images = bug_soup.find_all("img")
    bug_urls = []
    for image in bug_images:
        try:
            match = pattern.match(image["src"])
            if match:
                bug_urls.append(match.group(1))
        except KeyError:
            pass

    fish_soup = BS(requests.get(fish_url).text, features="html5lib")
    fish_images = fish_soup.find_all("img")
    fish_urls = []
    for image in fish_images:
        try:
            match = pattern.match(image["src"])
            if match:
                fish_urls.append(match.group(1))
        except KeyError:
            pass

    bug_urls = bug_urls[:80]
    fish_urls = fish_urls[:80]

    for i, url in enumerate(bug_urls):
        with open("bugs/{:0>2}.png".format(i), "wb") as file:
            file.write(requests.get(url).content)

    for i, url in enumerate(fish_urls):
        with open("fish/{:0>2}.png".format(i), "wb") as file:
            file.write(requests.get(url).content)

