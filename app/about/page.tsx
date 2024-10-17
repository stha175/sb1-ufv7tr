import Image from 'next/image';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-primary mb-6">About Mountain Trek Guides</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-muted-foreground mb-4">
            Mountain Trek Guides was founded in 2010 by a group of passionate mountaineers who wanted to share their love for the mountains with others. Our mission is to provide safe, exciting, and unforgettable trekking experiences for adventurers of all skill levels.
          </p>
          <p className="text-muted-foreground mb-4">
            With over a decade of experience, our team of expert guides has led thousands of trekkers through some of the most breathtaking mountain ranges in the world. We pride ourselves on our commitment to safety, environmental responsibility, and creating personalized adventures that cater to our clients' needs and aspirations.
          </p>
          <p className="text-muted-foreground">
            Whether you're a seasoned trekker looking for your next challenge or a beginner taking your first steps into the world of mountain adventures, Mountain Trek Guides is here to make your dreams a reality.
          </p>
        </div>
        <div className="relative h-64 md:h-auto">
          <Image
            src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Mountain trekking group"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-primary mt-12 mb-6">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { name: 'Alex Johnson', role: 'Lead Guide', image: 'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1506&q=80' },
          { name: 'Sarah Thompson', role: 'Safety Specialist', image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
          { name: 'Mike Chen', role: 'Environmental Expert', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80' },
        ].map((member, index) => (
          <div key={index} className="bg-card rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src={member.image}
                alt={member.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-primary">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}