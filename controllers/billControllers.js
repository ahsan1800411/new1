import Bill from '../models/bill.js';

export const createBill = async (req, res) => {
  try {
    const { description, category, amount } = req.body;
    const newBill = await Bill.create({ description, amount, category });

    res.status(200).json(newBill);
  } catch (error) {
    console.log(error);
  }
};

export const getAllBills = async (req, res) => {
  try {
    const bills = await Bill.find();
    const categories = await Bill.find().select({ category: 1, _id: 0 });
    res.status(200).json({ bills, categories });
  } catch (error) {
    console.log(error);
  }
};
export const getBillsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const bills = await Bill.find({ category });
    res.status(200).json(bills);
  } catch (error) {
    console.log(error);
  }
};
export const updateBill = async (req, res) => {
  try {
    const { id } = req.params;
    const billUpdated = await Bill.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(billUpdated);
  } catch (error) {
    console.log(error);
  }
};
export const deleteBill = async (req, res) => {
  try {
    const { id } = req.params;
    const bill = await Bill.findById({ _id: id });

    await bill?.remove();
    res.status(200).json({ msg: 'Deleted Successfully' });
  } catch (error) {
    console.log(error);
  }
};
