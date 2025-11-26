const express = require("express");
const router = express.Router();

const { createAssignmentValidation, updateAssignmentValidation } = require("../validators/assignmentValidation");
const { createAssignment, updateAssignment, deleteAssignment, getAssignment, getSingleAssignment } = require("../controllers/assignmentController");
const { authMiddleware, roleMiddleware } = require("../middleware/authMiddleware");
const validator = require('express-joi-validation').createValidator({ passError: true })

router.post("/", authMiddleware, roleMiddleware('assignment:create'), validator.body(createAssignmentValidation), createAssignment);
router.put("/:id", authMiddleware, roleMiddleware('assignment:update'), validator.body(updateAssignmentValidation), updateAssignment);
router.delete("/:id", authMiddleware, roleMiddleware('assignment:delete'), deleteAssignment);
router.get("/:lesson_id", authMiddleware, roleMiddleware('assignment:get'), validator.query(createAssignmentValidation), getAssignment);
router.get("/:id", authMiddleware, roleMiddleware('assignment:getSingle'), getSingleAssignment);

module.exports = router;