export function LocationTab({ mapUrl }: { mapUrl: string }) {    
  return (
    <div className="space-y-12">
        <div>
            <h3 className="text-2xl font-bold text-brand-dark mb-6">Location</h3>
            <div className="aspect-video rounded-xl overflow-hidden">
                <iframe src={mapUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
            </div>
        </div>        
    </div>
  );
}