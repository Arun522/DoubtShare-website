import mongoose from 'mongoose';


const tutorAvailabilitySchema = new mongoose.Schema({
  tutorId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  lastPing: {
    type: Date,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true, 
  },
});

export const TutorAvailabilityModel = mongoose.model('TutorAvailability', tutorAvailabilitySchema);
