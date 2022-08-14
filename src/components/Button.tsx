import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Button({icon, href}:any) {
  return (
    <a href={href} className='sm:text-xl ml-auto mr-auto sm:border rounded-xl hover:bg-primary transition-all hover:text-background'>
      <FontAwesomeIcon icon={icon} className='sm:pl-8 sm:pr-8 t-1'/>
    </a>
  );
}
