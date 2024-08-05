import Accordion from './Accordion/Accordion';
import { questions } from './data';
import './FAQ.scss';

const FAQ: React.FC = () => {

    return (
        <div className="container-large faq" id='faq'>
            <div className="container-small">
                <section className='faq-filling'>
                    <h2 className="h2-header">
                        Часто задаваемые вопросы
                    </h2>
                    
                    <Accordion
                        data={questions}
                        classParent='faq-list'
                    />
                </section>
            </div>
            
        </div>
    )
}

export default FAQ;