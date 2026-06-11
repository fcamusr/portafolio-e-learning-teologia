from rest_framework import serializers

from .models import Course, Unit, Lesson

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

class LessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = (
            "id",
            "title",
            "summary",
            "text_content",
            "order",
            "estimated_minutes",
            "is_published",
            "created_at",
            "updated_at",
        )


class UnitSerializer(serializers.ModelSerializer):
    lessons = LessonSerializer(many=True, read_only=True)

    class Meta:
        model = Unit
        fields = (
            "id",
            "title",
            "description",
            "order",
            "is_published",
            "created_at",
            "updated_at",
            "lessons",
        )


class CourseDetailSerializer(serializers.ModelSerializer):
    units = UnitSerializer(many=True, read_only=True)

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
            "units",
        )