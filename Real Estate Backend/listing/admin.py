from django.contrib import admin
from .models import Listing
# from .forms import ListingForm


# class ListingAdmin(admin.ModelAdmin):
#     form = ListingForm

admin.site.register(Listing)
