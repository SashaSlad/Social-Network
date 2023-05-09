import React, { useEffect, useState } from "react";
// import s from "../ProfileInfo/ProfileInfo.module.css";

const ProfileStatusWithHooks = (props) => {

	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);

	useEffect(() => {
		setStatus(props.status);
	}, [props.status])

	const activateEditMode = () => {
		setEditMode(true);
	}

	const deactivateEditMode = () => {
		setEditMode(false);
		props.updateStatus(status);
	}

	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value);
	}

	return (
		<>
			{!editMode &&
				<div>
					<b>{"Status (double click to edit): "}</b>
					<span onDoubleClick={activateEditMode}>{props.status || 'HI!'}</span>
				</div>
			}
			{editMode &&
				<div>
					<input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} ></input>
				</div>
			}
		</>
	)
}

export default ProfileStatusWithHooks;