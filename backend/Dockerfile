FROM python:3.11-apline

WORKDIR /app

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

EXPOSE 6991

CMD ["python", "app.py"]

