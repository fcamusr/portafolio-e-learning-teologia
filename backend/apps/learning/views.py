from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Course
from .serializers import CourseSerializer, CourseDetailSerializer


@api_view(["GET"])
def course_list(request):
    courses = Course.objects.filter(is_published=True).order_by("title")
    serializer = CourseSerializer(courses, many=True)
    return Response(serializer.data)

@api_view(["GET"])
def course_detail(request, course_id):
    queryset = Course.objects.filter(is_published=True).prefetch_related("units__lessons")
    course = get_object_or_404(queryset, id=course_id)
    serializer = CourseDetailSerializer(course)
    return Response(serializer.data)