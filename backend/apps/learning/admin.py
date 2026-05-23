from django.contrib import admin

from .models import Course, Unit, Lesson, LessonProgress


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ("title", "level", "is_published", "created_at", "updated_at")
    list_filter = ("level", "is_published", "created_at", "updated_at")
    search_fields = ("title", "description")
    ordering = ("title",)


@admin.register(Unit)
class UnitAdmin(admin.ModelAdmin):
    list_display = ("title", "course", "order", "is_published", "updated_at")
    list_filter = ("course", "is_published", "created_at", "updated_at")
    search_fields = ("title", "description", "course__title")
    ordering = ("course", "order", "id")


@admin.register(Lesson)
class LessonAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "unit",
        "order",
        "estimated_minutes",
        "is_published",
        "updated_at",
    )
    list_filter = ("unit", "is_published", "created_at", "updated_at")
    search_fields = (
        "title",
        "summary",
        "text_content",
        "unit__title",
        "unit__course__title",
    )
    ordering = ("unit", "order", "id")


@admin.register(LessonProgress)
class LessonProgressAdmin(admin.ModelAdmin):
    list_display = (
        "user",
        "lesson",
        "is_completed",
        "started_at",
        "completed_at",
        "updated_at",
    )
    list_filter = ("is_completed", "started_at", "completed_at", "updated_at")
    search_fields = (
        "user__username",
        "user__email",
        "lesson__title",
        "lesson__unit__title",
        "lesson__unit__course__title",
    )
    ordering = ("-updated_at",)