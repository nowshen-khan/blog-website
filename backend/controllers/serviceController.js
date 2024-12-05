const Service = require('../models/Service');

// Get all services
exports.getServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create new service
exports.createService = async (req, res) => {
    const { name, description, image } = req.body;
    try {
        const newService = new Service({ name, description, image });
        await newService.save();
        res.status(201).json(newService);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update service
exports.updateService = async (req, res) => {
    const { id } = req.params;
    const { name, description, image } = req.body;
    try {
        const service = await Service.findByIdAndUpdate(
            id,
            { name, description, image, updatedAt: Date.now() },
            { new: true }
        );
        res.json(service);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete service
exports.deleteService = async (req, res) => {
    const { id } = req.params;
    try {
        await Service.findByIdAndDelete(id);
        res.json({ message: 'Service deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
