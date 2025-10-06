import { ServiceBody } from '../../components/service/PageBody';
import TwoRowCarousel from '../../components/ImageMarquee';
import { HeroSection } from '../../components/service/HeroSection';
import services from '../../data/services.json'; // Adjust path as needed
import { notFound } from 'next/navigation';
import { Marquee } from '../../components/LogoMarquee';

export default function ServicePage({ params }) {
    const { slug } = params;

    // Assuming services is an array of objects like [{ slug: 'service-1', name: 'Service 1' }, ...]
    const service = services.find(s => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <main>
            <HeroSection tagline={service?.name} image={{src: service?.image, alt:service?.name}} description={service?.subHeading} features={service?.points} heading={service?.servicePageHeading}/>


<ServiceBody service={service}/>

        </main>
    );
}

// To use this, your route should be /services/[slug]/page.jsx
// And your services.json should look like:
// [
//   { "slug": "service-1", "name": "Service 1" },
//   { "slug": "service-2", "name": "Service 2" }
// ]