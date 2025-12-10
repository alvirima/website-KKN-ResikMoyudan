import "../HeroEdukasi/HeroEdukasi.css";

const TabsEdukasi = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tabs">
      <button
        className={activeTab === "pemilahan" ? "tab active" : "tab"}
        onClick={() => setActiveTab("pemilahan")}
      >
        Pemilahan Sampah
      </button>

      <button
        className={activeTab === "kompos" ? "tab active" : "tab"}
        onClick={() => setActiveTab("kompos")}
      >
        Pengomposan
      </button>
    </div>
  );
};

export default TabsEdukasi;
