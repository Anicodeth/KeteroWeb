const { getService, getServices, updateService, deleteService, createService } = require('../services/serviceService');
const admin = require('firebase-admin');
const { v4: uuidv4 } = require('uuid');

// Initialize Firebase Admin SDK
admin.initializeApp(
    {
        apiKey: "AIzaSyB7mld1SBEAbEqb22rsgbNcFFd_OetBllU",
        authDomain: "ketero-72e14.firebaseapp.com",
        projectId: "ketero-72e14",
        storageBucket: "ketero-72e14.appspot.com",
        messagingSenderId: "535787695172",
        appId: "1:535787695172:web:2809c4f6f2c18e71742011",
        measurementId: "G-PTMX0XDBYC"
      }
);

// Get a Firestore instance
const db = admin.firestore();

// Get a Storage instance
const storage = admin.storage().bucket();


exports.getService = async (req, res) => {
    try {
        const { id } = req.params;
        const service = await getService(id);
        res.status(200).json(service);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getServices = async (req, res) => {
    try {
        const services = await getServices();
        res.status(200).json(services);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.createService = async (req, res) => {
    try {
        const { name, description, price } = req.body;
        const image = req.file; 

        const filename = `${uuidv4()}_${image.originalname}`;

        const fileUpload = storage.file(filename);
        await fileUpload.save(image.buffer, {
            metadata: {
                contentType: image.mimetype
            }
        });

        const imageUrl = await fileUpload.getSignedUrl({
            action: 'read',
            expires: '01-01-2200'
        });



        const service = await createService({
            name: name,
            description: description,
            price: price,
            image: imageUrl[0] 
        })

   

        res.status(201).json(service);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.updateService = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const updatedService = await updateService(id, updateData);
        res.status(200).json(updatedService);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteService = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedService = await deleteService(id);
        res.status(200).json(deletedService);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
