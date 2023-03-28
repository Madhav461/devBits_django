from django.db import models

# Create your models here.
class User(models.Model):
    first_name = models.CharField(max_length=30)
    stocks_bought = models.