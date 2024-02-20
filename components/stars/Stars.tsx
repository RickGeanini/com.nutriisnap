import { Star } from 'lucide-react';
import './Stars.module.css';

// STAR COMPONENT
const StarComponent = () => {
    /* Render */
    return (
        <div className="star-rating">
            <div className="stars flex flex-row">
                {Array.from({ length: 5 }, () => (
                    <Star fill="yellow" strokeWidth={0} />
                ))}
            </div>
        </div>
    );
};

export default StarComponent;
