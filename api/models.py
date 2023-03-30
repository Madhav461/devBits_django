from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from jsonfield import JSONField


# Create your models here.

# class Task(models.Model):
#   title = models.CharField(max_length=200)
#   completed = models.BooleanField(default=False, blank=True, null=True)
  
#   def _str_(self):
#     return self.title
  
#   class User(models.Model):
#     name=models.CharField(max_length=100)

class Profile(models.Model):
  user = models.OneToOneField(User, on_delete=models.CASCADE)
  id = models.BigAutoField(primary_key=True)
  stocks_list = JSONField()
  money_available = models.FloatField(default=1000000.0)
  
  def _str_(self):
    return str(self.id)
  
  def buy(self):
    self.money_available = self.money_available - 1
    return self.money_available
  
    
#this method to generate profile when user is created
@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
  if created:
    Profile.objects.create(user=instance)

#this method to update profile when user is updated
@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
  instance.profile.save()