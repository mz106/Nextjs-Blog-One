import Link from 'next/link';

import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header>
      <div>
        <Link href="/">DevBlog</Link>
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <Link href="/posts">All Posts</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainHeader;