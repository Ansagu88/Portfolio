from django.contrib import admin
from .models import *

# Register your models here.
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'slug', 'views')
    list_display_link = ('id', 'name')
    list_per_page = 25
    

admin.site.register(Category, CategoryAdmin)