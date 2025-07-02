# WordPress Gallery Integration Setup Guide

This guide explains how to set up your WordPress site to work with the new frontend gallery integration.

## Overview

The frontend is now configured to pull gallery content from WordPress. Currently, it shows placeholder content but will automatically switch to WordPress content once properly configured.

## Option 1: WordPress Media API (Recommended)

### Basic Setup

1. **Enable REST API**: Ensure your WordPress site has the REST API enabled (usually enabled by default)
2. **Media Endpoint**: The frontend will use `/wp/v2/media` to fetch images
3. **CORS**: Ensure your WordPress site allows CORS requests from your frontend domain

### WordPress Configuration

#### 1. Upload Images to WordPress Media Library

- Go to WordPress Admin → Media → Add New
- Upload your gallery images
- Add proper titles, alt text, and captions for each image
- Organize images by creating descriptive titles

#### 2. Create Custom Fields for Gallery Organization (Optional)

Install a plugin like "Advanced Custom Fields" or "Custom Field Suite" to add:

- Gallery section categories
- Image descriptions
- Custom metadata

#### 3. WordPress Plugins to Consider

**Essential Plugins:**

- **Advanced Custom Fields (ACF)** - For organizing gallery sections
- **REST API Customizer** - For custom endpoints
- **CORS Headers** - If you have CORS issues

**Gallery-Specific Plugins:**

- **Envira Gallery** - Professional gallery plugin with REST API support
- **Modula Image Gallery** - Lightweight gallery with API
- **FooGallery** - Popular gallery plugin

## Option 2: Custom WordPress Endpoints

### Create Custom REST API Endpoints

Add this code to your WordPress theme's `functions.php` or a custom plugin:

```php
<?php
// Add custom gallery endpoints
add_action('rest_api_init', function () {
    register_rest_route('wmf/v1', '/gallery-sections', array(
        'methods' => 'GET',
        'callback' => 'get_gallery_sections',
        'permission_callback' => '__return_true'
    ));
});

function get_gallery_sections() {
    // Define your gallery sections
    $sections = array(
        array(
            'id' => 1,
            'title' => 'WMF Programs and Workshops',
            'description' => 'A visual journey through our various programs and workshops designed to support women\'s mental health and well-being.',
            'images' => get_media_by_category('wmf-programs')
        ),
        array(
            'id' => 2,
            'title' => 'GOPIO',
            'description' => 'Pushpa delivering the domestic violence workshops for Global Organisation of Person of Indian Origin (GOPIO).',
            'images' => get_media_by_category('gopio')
        ),
        // Add more sections as needed
    );

    return $sections;
}

function get_media_by_category($category) {
    // Implementation to get media by category
    // This would depend on how you organize your media
    $args = array(
        'post_type' => 'attachment',
        'post_mime_type' => 'image',
        'posts_per_page' => -1,
        'meta_query' => array(
            array(
                'key' => 'gallery_category',
                'value' => $category,
                'compare' => '='
            )
        )
    );

    $attachments = get_posts($args);
    $media = array();

    foreach ($attachments as $attachment) {
        $media[] = array(
            'id' => $attachment->ID,
            'title' => array('rendered' => $attachment->post_title),
            'alt_text' => get_post_meta($attachment->ID, '_wp_attachment_image_alt', true),
            'caption' => array('rendered' => $attachment->post_excerpt),
            'source_url' => wp_get_attachment_url($attachment->ID),
            'media_details' => wp_get_attachment_metadata($attachment->ID)
        );
    }

    return $media;
}
?>
```

## Option 3: Using Existing Gallery Plugins

### Envira Gallery Integration

1. Install Envira Gallery plugin
2. Create galleries for each section
3. Use Envira's REST API endpoints
4. Update the frontend to use Envira's API format

### Modula Gallery Integration

1. Install Modula Image Gallery
2. Create galleries and get their IDs
3. Use Modula's REST API endpoints
4. Customize the frontend to match Modula's response format

## Environment Configuration

### Frontend Environment Variables

Ensure your `.env.local` file has:

```
NEXT_PUBLIC_WORDPRESS_API_URL=https://your-wordpress-site.com/wp-json/wp/v2
```

### WordPress CORS Settings

Add to your WordPress site's `.htaccess` or server configuration:

```apache
<IfModule mod_headers.c>
    Header set Access-Control-Allow-Origin "*"
    Header set Access-Control-Allow-Methods "GET, POST, OPTIONS"
    Header set Access-Control-Allow-Headers "Content-Type"
</IfModule>
```

## Testing the Integration

### 1. Test WordPress API Endpoints

Visit these URLs in your browser to test:

- `https://your-wordpress-site.com/wp-json/wp/v2/media` - Should return media items
- `https://your-wordpress-site.com/wp-json/wmf/v1/gallery-sections` - If using custom endpoints

### 2. Test Frontend Integration

1. Set up your environment variables
2. Run the frontend development server
3. Visit the gallery page
4. Check browser console for any errors
5. Verify that WordPress content appears instead of placeholders

## Troubleshooting

### Common Issues

**CORS Errors:**

- Ensure WordPress allows requests from your frontend domain
- Check server configuration for CORS headers

**API Not Found:**

- Verify WordPress REST API is enabled
- Check if any security plugins are blocking API access

**Images Not Loading:**

- Verify image URLs are accessible
- Check WordPress media permissions
- Ensure proper image sizes are generated

**Gallery Sections Not Appearing:**

- Check the `getGallerySections()` function implementation
- Verify WordPress endpoint is returning expected data
- Check browser console for errors

### Debug Steps

1. Check browser network tab for API requests
2. Verify WordPress API responses
3. Check frontend console for errors
4. Test API endpoints directly in browser
5. Verify environment variables are set correctly

## Next Steps

1. **Choose your approach** (Media API, Custom Endpoints, or Gallery Plugin)
2. **Set up WordPress configuration** based on your chosen approach
3. **Test the integration** using the troubleshooting steps
4. **Customize the gallery sections** to match your content
5. **Add image optimization** and lazy loading if needed
6. **Implement lightbox functionality** for full-size image viewing

## Support

If you encounter issues:

1. Check the troubleshooting section above
2. Verify WordPress and frontend configurations
3. Test API endpoints independently
4. Check browser console and network tabs for errors
