// StudentList.jsx
import Link from 'next/link';

const StudentListPage = () => {
  return (
    <div>
      Student List
      <ul>
        <li>
          <Link href="about/studentlist/1">Anil</Link>
        </li>
        <li>
          <Link href="about/studentlist/2">Sunil</Link>
        </li>
        <li>
          <Link href="about/studentlist/3">Ramphal</Link>
        </li>
      </ul>
    </div>
  );
};

export default StudentListPage;
