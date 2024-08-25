FROM python:3

COPY requirements.txt /requirements.txt

RUN pip install -r requirements.txt

COPY main.py /main.py

ENV URL="https://catfact.ninja/fact"

CMD ["python", "/main.py"]