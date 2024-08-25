import os
import requests

def get_cat():
    url = os.environ['INPUT_URL']
    response = requests.get(url)
    fact = response.json().get('fact')
    print(f"echo fact={fact} >> $GITHUB_OUTPUT")

if __name__ == '__main__':
    get_cat()