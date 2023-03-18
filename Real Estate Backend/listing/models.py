from django.db import models
from django.contrib.gis.db  import models as geomodels
from django.contrib.gis.geos import Point
from django.contrib.auth import get_user_model
User = get_user_model()


AREA_CHOICES = (
    ('Inner London', 'Inner London'),
    ('Outer London', 'Outer London'),
)

LISTING_TYPES = (
    ('House', 'House'),
    ('Apartment', 'Apartment'),
    ('Office', 'Office'),
)

PROPERTY_STATUS =(
    ('Sale', 'Sale'),
    ('Rent', 'Rent'),
)

RENTAL_FREQUENCY= (
    ('Month', 'Month'),
    ('Week', 'Week'),
    ('Day', 'Day'),
)

class Listing(models.Model):
    """Model class for property listing"""

    seller = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)
    title = models.CharField(max_length=50)
    description = models.TextField(null=True, blank=True)
    area = models.CharField(max_length=20, choices=AREA_CHOICES, blank=True, null=True)
    borough = models.CharField(max_length=50, blank=True, null=True)
    listing_type = models.CharField(max_length=20, choices=LISTING_TYPES)
    property_status = models.CharField(max_length=20, blank=True, null=True, choices=PROPERTY_STATUS)
    price = models.DecimalField(max_digits=50, decimal_places=0)
    rental_frequency = models.CharField(max_length=20,  blank=True, null=True, choices=RENTAL_FREQUENCY)
    # location = geomodels.PointField(blank=True, null=True, srid=4326) #Note Srid is the spartial identifier, which is the unique identifier associated with the specific coordinate system
    latitude = models.FloatField(blank=True, null=True)
    longitude = models.FloatField(blank=True, null=True)
    date_posted = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    picture1 = models.ImageField(blank=True,null=True, upload_to="pictures/%Y/%m/%d/")
    picture2 = models.ImageField(blank=True,null=True, upload_to="pictures/%Y/%m/%d/")
    picture3 = models.ImageField(blank=True,null=True, upload_to="pictures/%Y/%m/%d/")
    picture4 = models.ImageField(blank=True,null=True, upload_to="pictures/%Y/%m/%d/")
    picture5 = models.ImageField(blank=True,null=True, upload_to="pictures/%Y/%m/%d/")

    # Property features
    rooms = models.IntegerField(blank=True, null=True)
    pool = models.BooleanField(default=False)
    furnished = models.BooleanField(default=False)
    elevator = models.BooleanField(default=False)
    cctv = models.BooleanField(default=False)
    parking = models.BooleanField(default=False)
    wifi = models.BooleanField(default=False) 



    def __str__(self):
        return self.title