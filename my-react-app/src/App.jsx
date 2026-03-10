import { useState } from "react";

export default function App() {
  return (
    <div>
      <Counter />
      <ToggleMenu />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px",
        maxWidth: "500px",
        margin: "0 auto",
      }}
    >
      <h1>⏱️ ตัวนับ</h1>
      <p
        style={{
          fontSize: "48px",
          color: "#007bff",
          fontWeight: "bold",
          margin: "20px 0",
        }}
      >
        {count}
      </p>

      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <button
          onClick={decrement}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          ➖ ลด
        </button>

        <button
          onClick={reset}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            backgroundColor: "#6c757d",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          🔄 รีเซ็ต
        </button>

        <button
          onClick={increment}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          ➕ เพิ่ม
        </button>
      </div>
    </div>
  );
}

function ToggleMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ padding: "20px", marginTop: "40px" }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#0066cc",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {isOpen ? "ปิดเมนู ▼" : "เปิดเมนู ▶"}
      </button>

      {isOpen && (
        <div
          style={{
            backgroundColor: "#f0f0f0",
            padding: "20px",
            marginTop: "10px",
            borderRadius: "4px",
            border: "1px solid #ddd",
          }}
        >
          <p style={{ margin: "8px 0" }}>
            🔗 <a href="#home">หน้าแรก</a>
          </p>
          <p style={{ margin: "8px 0" }}>
            🔗 <a href="#about">เกี่ยวกับ</a>
          </p>
          <p style={{ margin: "8px 0" }}>
            🔗 <a href="#contact">ติดต่อ</a>
          </p>
        </div>
      )}
    </div>
  );
}
