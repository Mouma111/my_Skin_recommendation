import SkinIssue from "../models/SkinIssue.js";

export const diagnoseSkin = async (req, res) => {
  const symptoms = req.body.symptoms.toLowerCase();

  const issues = await SkinIssue.find();

  for (let issue of issues) {
    for (let word of issue.keywords) {
      if (symptoms.includes(word.toLowerCase())) {
        return res.json({
          condition: issue.condition,
          doctor: issue.doctor,
        });
      }
    }
  }

  return res.json({
    condition: "Unknown Skin Condition",
    doctor: "General Dermatologist recommended",
  });
};
