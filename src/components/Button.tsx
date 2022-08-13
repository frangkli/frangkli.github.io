import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Button({icon, href}:any) {
  return (
    <a href={href} className='text-xl ml-auto mr-auto border rounded-xl hover:bg-primary transition-all hover:text-background'>
      <FontAwesomeIcon icon={icon} className='pl-8 pr-8 pt-1'/>
    </a>
  );
}