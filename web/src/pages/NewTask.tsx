import {useState} from "react";
import {useNavigate} from "react-router";
import {PageHeader} from "../components/layout/PageHeader";
import {TaskForm} from "../components/newtask/TaskForm";
import {AttachmentsSection} from "../components/newtask/AttachmentsSection";
import {SaveTaskButton} from "../components/newtask/SaveTaskButton";
import attachment1 from "../assets/attachment-1-56586a.png";
import attachment2 from "../assets/attachment-2-56586a.png";
import attachment3 from "../assets/attachment-3-56586a.png";
import {useCreateTask} from "@/service/tasks/queries";

export function NewTask() {
  const navigate = useNavigate();
  const [taskName, setTaskName] = useState("");
  const [notes, setNotes] = useState("");
  const [attachments, setAttachments] = useState([
    {id: 1, src: attachment1},
    {id: 2, src: attachment2},
    {id: 3, src: attachment3},
  ]);
  const {mutate: createTask} = useCreateTask();

  const handleRemoveAttachment = (id: number) => {
    setAttachments((prev) => prev.filter((att) => att.id !== id));
  };

  const handleTakePhoto = () => {
    // TODO: Implement take photo functionality
    console.log("Take photo");
  };

  const handleUploadPhoto = () => {
    // TODO: Implement upload photo functionality
    console.log("Upload photo");
  };

  const handleSave = () => {
    createTask({task_name: taskName, notes, completed: false});
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#F6F7F8] flex flex-col">
      <PageHeader title="New Task" onBack={() => navigate("/")} />

      <main className="flex-1 px-4 pt-4 pb-32 overflow-y-auto">
        <TaskForm taskName={taskName} notes={notes} onTaskNameChange={setTaskName} onNotesChange={setNotes} />
        <AttachmentsSection attachments={attachments} onRemoveAttachment={handleRemoveAttachment} onTakePhoto={handleTakePhoto} onUploadPhoto={handleUploadPhoto} />
      </main>

      <SaveTaskButton onSave={handleSave} />
    </div>
  );
}
