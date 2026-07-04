import re

file_path = "index.html"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Images
replacements = {
    'images/hero-cake.png': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop',
    'images/about-bakery.png': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop',
    'images/gallery-red-velvet.png': 'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?q=80&w=800&auto=format&fit=crop',
    'images/gallery-chocolate.png': 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=800&auto=format&fit=crop',
    'images/gallery-black-forest.png': 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=800&auto=format&fit=crop',
    'images/gallery-birthday.png': 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=800&auto=format&fit=crop',
    'images/gallery-pineapple.png': 'https://images.unsplash.com/photo-1519340333755-56e9c1d04579?q=80&w=800&auto=format&fit=crop',
    'images/gallery-butterscotch.png': 'https://images.unsplash.com/photo-1587668178277-295251f900ce?q=80&w=800&auto=format&fit=crop',
    'images/gallery-strawberry.png': 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=800&auto=format&fit=crop'
}
for old, new in replacements.items():
    content = content.replace(old, new)

# 2. Map
old_map = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3493.9!2d76.588!3d28.9045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBakes+%26+Sweets+Rohtak!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
new_map = "https://maps.google.com/maps?q=4%20Puliya,%20Sonipat%20Rd,%20next%20to%20Domino's,%20Tilak%20Nagar,%20Sector%203%20(P),%20Rohtak,%20Haryana%20124001&output=embed"
content = content.replace(old_map, new_map)

# 3. Testimonials
old_testimonials = """
      <div class="testimonials-grid">
        <div class="testimonial-card reveal" data-delay="0">
          <div class="testimonial-stars">★★★★★</div>
          <p class="testimonial-text">"Ordered a custom red velvet cake for my daughter's birthday — it was absolutely stunning and tasted even better! The cream was so rich and fresh. Will definitely order again."</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar">P</div>
            <div class="testimonial-author-info">
              <h4>Priya Sharma</h4>
              <span>Birthday Celebration</span>
            </div>
          </div>
        </div>

        <div class="testimonial-card reveal" data-delay="100">
          <div class="testimonial-stars">★★★★★</div>
          <p class="testimonial-text">"Best bakery in Rohtak! Their eggless cakes are unbelievable — you'd never guess they're eggless. The chocolate truffle was divine. Super friendly staff and great prices too."</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar">R</div>
            <div class="testimonial-author-info">
              <h4>Rahul Verma</h4>
              <span>Regular Customer</span>
            </div>
          </div>
        </div>

        <div class="testimonial-card reveal" data-delay="200">
          <div class="testimonial-stars">★★★★★</div>
          <p class="testimonial-text">"We ordered a 3-tier wedding cake and it exceeded all expectations. Beautiful design, perfect taste, and delivered on time. The whole family loved it. Highly recommended!"</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar">A</div>
            <div class="testimonial-author-info">
              <h4>Anita Yadav</h4>
              <span>Wedding Order</span>
            </div>
          </div>
        </div>
      </div>
"""

new_testimonials = """
      <div class="reviews-section" style="text-align: center; max-width: 600px; margin: 0 auto;">
        <div class="hero-stat-number" style="font-size: 3rem; color: var(--color-gold); font-family: var(--font-heading); font-weight: 700; margin-bottom: 0.5rem;">4.8★</div>
        <p style="font-size: 1.1rem; color: var(--color-text); margin-bottom: 2rem;">Based on 19 real reviews on Google.</p>
        <a href="https://maps.google.com/?q=Bakes+and+Sweets+Rohtak+4+Puliya+Sonipat+Rd" class="btn btn-gold" target="_blank" rel="noopener">
          Read our Google Reviews
        </a>
      </div>
"""
if '<div class="testimonials-grid">' in content:
    # We can replace from <div class="testimonials-grid"> to the closing </div></div> of the section-padding.
    pass # Wait, let's just do a regex sub to be safe and ignore exact whitespaces.

content = re.sub(r'<div class="testimonials-grid">[\s\S]*?</div>\s*</div>\s*</section>', 
                 new_testimonials + '\n    </div>\n  </section>', content)

# 4. Favicon
old_favicon = """<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🧁</text></svg>">"""
new_favicon = """<link rel="icon" href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20100%20100'%3E%3Ctext%20y='.9em'%20font-size='90'%3E%F0%9F%A7%81%3C/text%3E%3C/svg%3E">"""
content = content.replace(old_favicon, new_favicon)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Updates completed successfully.")
