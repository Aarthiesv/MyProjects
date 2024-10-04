import React, { useState } from "react";
import "../header/header.css";
import { HeaderList } from "../../constant/nav/Nav";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";
import Sign_in from "../../components/auth/Sign_in";
const FirstHeader = () => {
  const [search, setSearch] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="header-main">
      <div className="header-wrapper ">
        <input
          className="Input"
          value={search}
          placeholder="Search for products, brands and more"
          onChange={(e) => handleOnChange(e)}
        />
        {/* <input className="Background" /> */}
        {HeaderList?.map((data) => (
          <div
            className="sub-title "
            key={data?.id}
            onClick={() => setIsModalVisible(data.id)}
          >
            <img src={data?.icon} alt="no" />
            <p className="content">{data?.content}</p>
          </div>
        ))}
        <Modal
          open={isModalVisible}
          footer={null}
          closable={false}
          centered={true}
          onCancel={handleCancel}
          width="55%"
          margin="10%"
        >
          <Sign_in
            setIsModalVisible={setIsModalVisible}
            onCancel={handleCancel}
          />
        </Modal>
      </div>
    </div>
  );
};

export default FirstHeader;
