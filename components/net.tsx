export default function Net() {
  return (
    <svg className="absolute inset-0 h-full w-full dark:text-gray-50/10" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="net" width="32" height="32" patternUnits="userSpaceOnUse" x="50%" y="100%" patternTransform="translate(0 -1)">
          <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#net)"></rect>
    </svg>
  );
}
