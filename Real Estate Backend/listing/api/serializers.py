from rest_framework import serializers
from listing.models import Listing


class LisitingSerializer(serializers.ModelSerializer):
    """Serializes listing model class"""

    class Meta:
        model = Listing
        fields = '__all__'