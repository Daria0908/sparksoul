import rew1 from '../../assets/images/rew1.png';
import rew2 from '../../assets/images/rew2.png';
import rew3 from '../../assets/images/rew3.png';

export interface IReview {
    id: number;
    text: string[];
    image: string;
}

export const data: IReview[] = [
    {
        id: 1,
        text: ['Lorem ipsum dolor sit amet consectetur. Sagittis quam quis bibendum nullam convallis sed suspendisse vitae purus. Tincidunt nibh suspendisse dictum erat. Ullamcorper id duis risus eu habitasse in volutpat. Ut fringilla suspendisse donec mauris iaculis vestibulum eget sapien ullamcorper.', 'Lorem ipsum dolor sit amet consectetur. Sagittis quam quis bibendum nullam convallis sed suspendisse vitae purus. Tincidunt nibh suspendisse dictum erat. Ullamcorper id duis risus eu habitasse in volutpat. Ut fringilla suspendisse donec mauris iaculis vestibulum eget sapien ullamcorper.'],
        image: rew1
    },
    {
        id: 2,
        text: ['Lorem ipsum dolor sit amet consectetur. Sagittis quam quis bibendum nullam convallis sed suspendisse vitae purus. Tincidunt nibh suspendisse dictum erat. Ullamcorper id duis risus eu habitasse in volutpat. Ut fringilla suspendisse donec mauris iaculis vestibulum eget sapien ullamcorper.'],
        image: rew2
    },
    {
        id: 3,
        text: ['Lorem ipsum dolor sit amet consectetur. Sagittis quam quis bibendum nullam convallis sed suspendisse vitae purus. Tincidunt nibh suspendisse dictum erat. Ullamcorper id duis risus eu habitasse in volutpat. Ut fringilla suspendisse donec mauris iaculis vestibulum eget sapien ullamcorper.', 'Lorem ipsum dolor sit amet consectetur.'],
        image: rew3
    }
]