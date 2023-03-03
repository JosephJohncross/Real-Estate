from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    "Custom class that extends django default user model"

    email = models.EmailField(unique=True)
