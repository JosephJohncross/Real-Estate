from django.contrib import admin
from .models import Listing, ListingFeature
from .forms import ListingForm


class ListingAdmin(admin.ModelAdmin):
    form = ListingForm



admin.site.register(Listing, ListingAdmin)
admin.site.register(ListingFeature)
