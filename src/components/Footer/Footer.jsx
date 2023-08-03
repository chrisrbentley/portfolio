import { Github, LinkedIn, Email } from '../Projects/svg';

const Footer = () => {
  return <footer className='flex flex-col justify-evenly items-center p-3 border-t border-[#e5e7eb]'>
    <div className='flex flex-row items-center gap-2'>
      <a aria-label='Github' className='p-3' href="https://github.com/chrisrbentley">
        <Github />
      </a>
      <a aria-label='email' className='p-3' href="mailto:chrisrbentley@pm.me">
        <Email />
      </a>
      <a aria-label='LinkedIn' className='p-3' href="https://www.linkedin.com/in/christopher-bentley-b62029240/">
        <LinkedIn />
      </a>
      
    </div>
    <p>Built by Christopher Bentley</p>

  </footer>
}

export default Footer;