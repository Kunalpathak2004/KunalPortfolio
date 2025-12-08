import React from "react";

export default function Footer() {
  return (
    <footer style={{ textAlign: "center", padding: "40px", opacity: 0.8 }}>
      © {new Date().getFullYear()} Kunal Pathak. Built with ❤️ using React.
    </footer>
  );
}
