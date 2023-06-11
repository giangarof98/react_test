import '../style/PropertyList.css';
import ComponentList from './ComponentList';

export default function PropertyList({properties}){
    
    return (
        <>
            <div className="body3">
                <div className='out'>
                    <div className='inner'>
                        {properties.map((i) => (
                            <div className='component'>
                                <ComponentList key={i.id} {...i}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}