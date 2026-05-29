from rest_framework import serializers

from .models import Course

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = (
            "id",
            "title",
            "description",
            "level",
            "is_published",
            "created_at",
            "updated_at",
        )