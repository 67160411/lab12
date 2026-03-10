import { useState } from "react";

export default function App() {
  return (
    <div>
      <Counter />
      <ToggleMenu />
      <UserInfo />
      <InputExample />
      <LoginForm />
      <LoginStatus />
      <Notification />
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

function UserInfo() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    age: "",
  });

  function updateFirstName(value) {
    setUser({ ...user, firstName: value });
  }

  function updateLastName(value) {
    setUser({ ...user, lastName: value });
  }

  function updateAge(value) {
    setUser({ ...user, age: value });
  }

  return (
    <div style={{ padding: "20px", marginTop: "40px", maxWidth: "400px" }}>
      <h2>👤 ข้อมูลส่วนตัว</h2>

      <div style={{ marginBottom: "15px" }}>
        <label>ชื่อ:</label>
        <input
          type="text"
          value={user.firstName}
          onChange={(e) => updateFirstName(e.target.value)}
          placeholder="กรอกชื่อ"
          style={{
            display: "block",
            padding: "8px",
            marginTop: "5px",
            width: "100%",
            fontSize: "14px",
          }}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>นามสกุล:</label>
        <input
          type="text"
          value={user.lastName}
          onChange={(e) => updateLastName(e.target.value)}
          placeholder="กรอกนามสกุล"
          style={{
            display: "block",
            padding: "8px",
            marginTop: "5px",
            width: "100%",
            fontSize: "14px",
          }}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>อายุ:</label>
        <input
          type="number"
          value={user.age}
          onChange={(e) => updateAge(e.target.value)}
          placeholder="กรอกอายุ"
          style={{
            display: "block",
            padding: "8px",
            marginTop: "5px",
            width: "100%",
            fontSize: "14px",
          }}
        />
      </div>

      <div
        style={{
          backgroundColor: "#f9f9f9",
          padding: "15px",
          borderRadius: "4px",
          border: "1px solid #ddd",
        }}
      >
        <h3>ข้อมูลที่บันทึก:</h3>
        <p>
          <strong>ชื่อ:</strong> {user.firstName || "ยังไม่กรอก"}
        </p>
        <p>
          <strong>นามสกุล:</strong> {user.lastName || "ยังไม่กรอก"}
        </p>
        <p>
          <strong>อายุ:</strong> {user.age || "ยังไม่กรอก"}
        </p>
      </div>
    </div>
  );
}

function InputExample() {
  const [text, setText] = useState("");

  return (
    <div style={{ padding: "20px", marginTop: "40px", maxWidth: "400px" }}>
      <h2>📝 กรอกข้อความ</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="พิมพ์อะไรสักอย่าง..."
        style={{
          display: "block",
          padding: "10px",
          fontSize: "16px",
          width: "100%",
          borderRadius: "4px",
          border: "1px solid #ddd",
        }}
      />

      <p style={{ marginTop: "10px" }}>
        คุณพิมพ์: <strong>{text}</strong>
      </p>

      <p style={{ marginTop: "20px", color: "#666" }}>
        จำนวนตัวอักษร: {text.length}
      </p>
    </div>
  );
}

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (username.trim() && password.trim()) {
      setSubmitted(true);
      console.log("ข้อมูลที่ส่ง:", { username, password });

      // รีเซ็ตหลังจาก 2 วินาที
      setTimeout(() => {
        setUsername("");
        setPassword("");
        setSubmitted(false);
      }, 2000);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "400px",
        margin: "20px auto",
        padding: "30px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ textAlign: "center" }}>🔐 เข้าสู่ระบบ</h2>

      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>
          ชื่อผู้ใช้:
        </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="สมชาย"
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "14px",
            borderRadius: "4px",
            border: "1px solid #ddd",
          }}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>
          รหัสผ่าน:
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••"
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "14px",
            borderRadius: "4px",
            border: "1px solid #ddd",
          }}
        />
      </div>

      <button
        type="submit"
        style={{
          width: "100%",
          padding: "12px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "4px",
          fontSize: "16px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        เข้าสู่ระบบ
      </button>

      {submitted && (
        <p style={{ marginTop: "20px", color: "#28a745", textAlign: "center" }}>
          เข้าสู่ระบบสำเร็จเป็น {username}!
        </p>
      )}
    </form>
  );
}

function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ padding: "20px", marginTop: "40px", textAlign: "center" }}>
      {isLoggedIn ? (
        <div
          style={{
            backgroundColor: "#d4edda",
            padding: "20px",
            borderRadius: "4px",
            border: "1px solid #c3e6cb",
          }}
        >
          <h2>🎉 ยินดีต้อนรับ!</h2>
          <p>คุณได้เข้าสู่ระบบแล้ว</p>
          <button
            onClick={() => setIsLoggedIn(false)}
            style={{
              padding: "10px 20px",
              backgroundColor: "#dc3545",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            ออกจากระบบ
          </button>
        </div>
      ) : (
        <div
          style={{
            backgroundColor: "#f8d7da",
            padding: "20px",
            borderRadius: "4px",
            border: "1px solid #f5c6cb",
          }}
        >
          <h2>🔒 กรุณาเข้าสู่ระบบ</h2>
          <button
            onClick={() => setIsLoggedIn(true)}
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            เข้าสู่ระบบ
          </button>
        </div>
      )}
    </div>
  );
}

function Notification() {
  const [hasMessage, setHasMessage] = useState(false);

  return (
    <div style={{ padding: "20px", marginTop: "40px", maxWidth: "400px" }}>
      {hasMessage && (
        <div
          style={{
            backgroundColor: "#d4edda",
            border: "1px solid #c3e6cb",
            padding: "15px",
            borderRadius: "4px",
            marginBottom: "15px",
            color: "#155724",
          }}
        >
          📩 คุณมีข้อความใหม่!
        </div>
      )}

      <button
        onClick={() => setHasMessage(!hasMessage)}
        style={{
          padding: "10px 20px",
          backgroundColor: hasMessage ? "#dc3545" : "#28a745",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {hasMessage ? "ลบการแจ้งเตือน" : "เพิ่มการแจ้งเตือน"}
      </button>
    </div>
  );
}
