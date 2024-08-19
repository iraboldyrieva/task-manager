export default async (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(404).send({ message: 'User not found' });
        }

        if (req.user.role !== 'admin') {
            return res.status(403).json({
                message: 'User dont have permission',
            });
        }

        next();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
