from django.db import models
from apps.category.models import Category
from django.utils import timezone
from ckeditor.fields import RichTextField
from ckeditor_uploader.fields import RichTextUploadingField

def blog_thumbnail_upload_location(instance, filename):
    return "blog/{0}/{1}".format(instance.title, filename)

# Create your models here.
class Post(models.Model):

    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status='published')
        
    options = (
        ('draft', 'Draft'),
        ('published', 'Published'),
    )

    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True)
    thumbnail = models.ImageField(upload_to=blog_thumbnail_upload_location)
    category = models.ForeignKey(Category, on_delete=models.PROTECT)
    published = models.DateTimeField(default=timezone.now)
    time_read = models.IntegerField()
    description = models.CharField(max_length=255)
    content = RichTextUploadingField(blank=True, null=True) 
    views = models.IntegerField(default=0, blank=True)
    status = models.CharField(max_length=10, choices=options, default='draft')

    objects = models.Manager() # The default manager.
    postobjects = PostObjects() # The custom manager.

    class Meta:
        verbose_name = "Post"
        verbose_name_plural = "Posts"
        ordering = ['-published']


    def __str__(self):
        return self.title
    
    def get_view_count(self):
        views = ViewCount.objects.filter(post=self).count()
        return views
    
class ViewCount(models.Model):
    class Meta:
        verbose_name = "View Count"
        verbose_name_plural = "View Counts"

    post = models.ForeignKey(Post, related_name='blogpost_view_count', on_delete=models.CASCADE)
    ip_address = models.CharField(max_length=255)

    def __str__(self):
        # return f'{self.category.name} - {self.ip_address}'  -------> This option is also available
        return f'{self.ip_address}'