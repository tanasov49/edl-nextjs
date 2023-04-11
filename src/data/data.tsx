import { ILinks, IProductItem } from "@/interfaces/interfaces";
import Product1 from '../../public/images/product-1.png';
import Product2 from '../../public/images/product-2.png';
import Product3 from '../../public/images/product-3.png';
export const menuLinks:ILinks[] = [
    {title: 'Services', link: 'services'},
    {title: 'Work', link: 'work'},
    {title: 'Trial', link: 'trial'},
    {title: 'Jobs', link: 'jobs'},
    {title: 'Contact', link: 'contact'}
]
export const productItems:IProductItem[] = [
    {src: Product1, linkTitle: 'Initial 1.0', link: 'initial', title: 'Enterprise data compliance made simple, collaborative, and enjoyable', 
    technologies: [
        {skill: 'UX research'},
        {skill: 'UX design'},
        {skill: 'UI design'},
        {skill: 'Design system'}
    ]},
    {src: Product2, linkTitle: 'Reimagined 2.0', link: 'reimagined', title: 'Designing a onboarding thousands of users every week.', 
    technologies: [
        {skill: 'Concept'},
        {skill: 'UX design'},
        {skill: 'UI design'},
    ]},
    {src: Product3, linkTitle: 'Exploration', link: 'exploration', title: 'Accessible, gorgeous data visualization for a sustainable future.', 
    technologies: [
        {skill: 'UX research'},
        {skill: 'UX design'},
        {skill: 'UI design'},
        {skill: 'Design system'},
    ]}
]