from .serializers import LisitingSerializer
from listing.models import Listing
from rest_framework import generics

class ListingList(generics.ListAPIView):
    queryset = Listing.objects.all()
    serializer_class = LisitingSerializer