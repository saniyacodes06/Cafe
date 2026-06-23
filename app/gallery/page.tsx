export default function GalleryPage() {
  const images = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    alt: `Gallery image ${i + 1}`,
  }))

  return (
    <div>
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16">
        <div className="mx-auto max-w-[1200px] px-4 md:px-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Moments</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Our Gallery</h1>
          <p className="text-muted-foreground max-w-md mx-auto">A visual journey through our dishes, ambiance, and the moments that make FlavorHub special.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-4 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img) => (
              <div key={img.id} className="group relative aspect-square rounded-2xl overflow-hidden bg-muted cursor-pointer">
                <div className="h-full w-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-muted-foreground">
                  <span className="text-4xl font-bold text-muted-foreground/20">{img.id}</span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-medium">View</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
