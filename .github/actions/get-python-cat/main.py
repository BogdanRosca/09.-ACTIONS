import os
import requests

def get_cat():
    url = os.environ['INPUT_URL']
    response = requests.get(url)
    fact = response.json().get('fact')
    with open(os.getenv('GITHUB_OUTPUT'), 'a') as output_file:
        output_file.write(f"fact={fact}\n")

if __name__ == '__main__':
    get_cat()