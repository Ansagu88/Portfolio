from django.contrib import admin
from .models import *

# Register your models here.
class PostAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'slug', 'views')
    list_display_link = ('id', 'title')
    list_per_page = 25
    

admin.site.register(Post, PostAdmin)
# Register your models here.
