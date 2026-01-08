function Footer() {
  return (
    <footer className='footer border border-(--violet-700) bg-violet-600/10 border-top border-l-transparent border-r-transparent z-10'>
      <div className='w-full py-3 px-4 flex justify-between '>
        <span>created by temy</span>
        <p>All rights reserved © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
